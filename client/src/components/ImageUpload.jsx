import { useState } from 'react';
import axios from 'axios';
import avatar from '../assets/profile.png';
import './styles.css';

const ImageUpload = () => {

  const baseURL = "/api/upload"

  const [postImage, setPostImage] = useState({myFile:''})
  const [uploadImage, setUploadedImage] = useState('')

  const convertToBase64 = (file) => {
    console.log('called 64')
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const createPost = async() => {
    try {
        const response = await axios.post(baseURL, postImage);
        console.log('response -->',response)
        setUploadedImage(response.data.myFile)
    } catch (error) {
        console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPost();
  }
  
  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setPostImage({...postImage, myFile:base64})
    console.log('base64 -->',base64)
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label
          htmlFor='file-upload'
          className='custom-file-upload'>
          <img src={uploadImage || avatar} alt=''>
          </img>
        </label>
        <input
          type='file'
          label="Image"
          file="myFile"
          id="file-upload"
          accept=' .jpeg, .png, .jpg'
          onChange={e => handleFileUpload(e)}>
        </input>
        <h3>Kingz</h3>
        <span>Programmer</span>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ImageUpload

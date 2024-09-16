import { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toaster } from '@/helpers/helpers'
import { Toaster } from 'react-hot-toast'
import { useCallback } from 'react'

const AddImage = () => {
  const [files, setFiles] = useState([])
  const [imagePreview, setImagePreview] = useState('')

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0]
    if (file) {
      setFiles([file])

      // Create a preview URL using FileReader
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleFileUpload = async () => {
    if (files.length === 0) {
      console.error('No file selected')
      return
    }

    try {
      const data = new FormData()
      data.append('file', files[0]) // Append the selected file to FormData

      const result = await axios.post('http://localhost:3000/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      })

      console.log('File uploaded successfully', result.data)
      toaster('success', 'Image Upload Successful')
      setFiles([])
    } catch (error) {
      console.error('Error uploading file', error)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <Toaster />
      <h1 className='text-[24px] font-medium'>Upload Image</h1>
      <Input type='file' onChange={handleFileChange} />
      {imagePreview && (
        <div className='m-auto'>
          <img
            src={imagePreview}
            alt='Preview'
            style={{ maxWidth: '300px', marginTop: '10px' }}
          />
        </div>
      )}
      <Button onClick={handleFileUpload}>Upload</Button>
    </div>
  )
}

export default AddImage

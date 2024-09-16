const fs = require('fs')
const axios = require('axios')

const fileUploader = async (filePath, fileName) => {
  try {
    // Read the file from the local filesystem
    const fileBuffer = fs.readFileSync(filePath)

    // Configure the BunnyCDN request
    let config = {
      method: 'PUT',
      maxBodyLength: Infinity,
      url: `https://storage.bunnycdn.com/e-commerce-mern/${fileName}`,
      headers: {
        AccessKey: '2b0ef866-671e-4d7f-82542ffaf808-5162-4a8e',
        'Content-Type': 'application/octet-stream',
      },
      data: fileBuffer, // Send the file as a buffer
    }

    // Make the request to upload the file to BunnyCDN
    const response = await axios.request(config)
    console.log('File uploaded to BunnyCDN:', response)

    return {
      imageUrl: `https://ecom-mern.b-cdn.net/${fileName}`,
      ...response.data,
    }
  } catch (error) {
    console.error('Error uploading file to BunnyCDN:', error)
    throw error
  }
}

module.exports = fileUploader

export function blobToBase64(blob) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = function() {
      const dataUrl = reader.result
      resolve(dataUrl)
    }
    reader.readAsDataURL(blob)
  })
}

export function readFile(file) {
  return new Promise(resolve => {
    const fr = new FileReader()
    fr.onload = function() {
      resolve(fr.result)
    }
    fr.readAsDataURL(file)
  })
}

export function downloadFile(source, name) {
  const linkSource = source
  const downloadLink = document.createElement('a')
  if (typeof linkSource === 'object') {
    downloadLink.href = URL.createObjectURL(linkSource)
  } else {
    downloadLink.href = linkSource
  }
  downloadLink.download = name
  downloadLink.click()
}

export function dataURLtoFile(dataurl, filename) {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

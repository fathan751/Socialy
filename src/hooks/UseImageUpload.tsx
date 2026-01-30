import { useRef,useState } from "react"
import { toast } from "sonner"

const UseImageUpload = () => {

  const inputRef = useRef<HTMLInputElement>(null)
  const [previewImg,setPreviewImg] = useState<string|null>(null)
  const [file,setFile] = useState<File|null>(null)

    const handleUpload = (e:React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if(selectedFile){
        
          const maxSize = 10 * 1024 * 1024

          if(selectedFile.size>maxSize){
            toast.error("File Size exceeds 10MB")
            return
          } else{
          setFile(selectedFile)
          setPreviewImg(URL.createObjectURL(selectedFile))
          }
        }
      }

    const handleDelete = () => {
    setFile(null)
    setPreviewImg(null)

    if(inputRef.current){
      inputRef.current.value = ""
    }
  }


  return {handleDelete,handleUpload,previewImg,file,inputRef}
}

export default UseImageUpload
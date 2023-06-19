import { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { Spinner } from '.';
import { sleep } from '@/utils/helper';

interface IDropzoneProps {
  onRead: (data: any) => void;
}

const Dropzone = ({ onRead }: IDropzoneProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setIsLoading(true);
    acceptedFiles.forEach((file: FileWithPath) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = async () => {
        const binaryStr = reader.result;
        await sleep(500);
        setIsLoading(false);
        onRead(binaryStr);
      };
      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (isLoading) {
    return (
      <div className='flex items-center justify-center'>
        <Spinner size='80' color='rgb(225 29 72)' />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center min-h-[7rem] bg-gray-100 p-4 m-2 border-4 border-dashed border-gray-300 cursor-pointer transition-all duration-300 hover:border-cyan-700 ${
        isDragActive ? 'border-cyan-700' : ''
      }`}
      {...getRootProps({
        style: {},
      })}
    >
      <input {...getInputProps()} />
      <p>Effettua il caricamento del file del Quiz in questo spazio</p>
    </div>
  );
};

export default Dropzone;

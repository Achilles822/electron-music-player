import * as musicMetadata from 'music-metadata-browser';

export const getFileMedadata = (file: File): any => {
  return musicMetadata.parseBlob(file).then((metadata: any) => {
    // console.log(`Completed parsing of ${file.name}:`, metadata);
    return metadata;
  });
};

export const convertBufferToBase64 = (imageBuffer: any): string => {
  const bytes = new Uint8Array(imageBuffer.data);
  let data = '';
  const len = bytes.byteLength;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++) {
    data += String.fromCharCode(bytes[i]);
  }
  return `data:image/png;base64,${window.btoa(data)}`;
};

import * as musicMetadata from 'music-metadata-browser';

export const getFileMedadata = (file: File): any => {
  return musicMetadata.parseBlob(file).then((metadata: any) => {
    // console.log(`Completed parsing of ${file.name}:`, metadata);
    return metadata;
  });
};

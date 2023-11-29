// InfoCardFunctions.js

// Add more content to the existing content
export const addMoreFunction = (title, prevContent, addContent) => {
    const updatedContent = `${prevContent}\n\n${addContent}`;
    console.log(`Save: Title - ${title}, Updated Content - ${updatedContent}`);
    return updatedContent;
  };
  
  // Placeholder function, replace it with your actual onAddMore implementation
  export const defaultOnAddMore = (title, content) => {
    console.log(`Save: Title - ${title}, Content - ${content}`);
  };
  
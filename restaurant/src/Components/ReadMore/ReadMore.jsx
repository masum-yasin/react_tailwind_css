import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";

const ReadMore = () => {
    const myLongText = "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sed, veritatis reprehenderit tenetur velit eius, facilis expedita doloremque cupiditate sit eaque iste vel amet labore, saepe fugiat corporis molestias soluta Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sed, veritatis reprehenderit tenetur velit eius, facilis expedita doloremque cupiditate sit eaque iste vel amet labore, saepe fugiat corporis molestias soluta Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sed, veritatis reprehenderit tenetur velit eius, facilis expedita doloremque cupiditate sit eaque iste vel amet labore, saepe fugiat corporismolestias soluta Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sed, veritatis reprehenderit tenetur velit eius, facilis expedita doloremque cupiditate sit eaque iste vel amet labore, saepe fugiat corporis molestias soluta "
    return (
        <>
         <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {myLongText}
            </ReactReadMoreReadLess>   

           
          
        </>
    );
};

export default ReadMore;
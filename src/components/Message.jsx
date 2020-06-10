import React from 'react'
import '../assets/styles/main.css';

function False(props) {
    return(
        <div className="registerPopUp__err">
            <p>مشکلی در ثبت اطلاعات رخ داده است!</p>
            <p>لطفا همه‌ی اطلاعات خواسته‌شده را پر کنید.!</p>
        </div>
    )
 }
  
 function True(props) {
    return(
        <div className="registerPopUp__true">
            <p>اطلاعات با موفقیت ثبت شد!</p>
        </div>
    );
  }


function Message(props){

    const msg = props.isTrue;
  if (msg==="true") {
    return <True />;
  }
  else if(msg==="false"){
    return <False />;
  }
  else{
      return <div></div>
  }
  

}

export default Message;
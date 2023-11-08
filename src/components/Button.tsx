import React from 'react';
import DjangoApi from '../api/django';

interface CallApi {
  action: string;
  type: string;
}


function callApi({ action, type }: CallApi) {
  console.log(action, type);
  if(type.toLowerCase() === 'django'){
    switch (action.toLowerCase()) {
        case 'get':
            DjangoApi.get()
        break;
        case 'create':
            DjangoApi.create()
            break;
        case 'update':
            DjangoApi.update()
            break;
        case 'delete':
            DjangoApi.delete()
            break;
      
        default:
            break;
      }
  }
}

const Button: React.FC<{ title: string; apiInfo: CallApi }> = ({ title, apiInfo }) => {
  return (
    <button className="border rounded-md p-2" onClick={() => callApi(apiInfo)}>
      {title}
    </button>
  );
};

export default Button;

import React from 'react';
import { ErrorImg } from "../../assets/images";
import s from './style.module.css';

// eslint-disable-next-line react/prop-types
function Error({ children }) {
  return (
    <div className={s.errorPage}>
      <div>
        <img src={ErrorImg} alt="error" width={400} height={400} className={s.img} />
        <div className={s.text}>
          <h1 className={s.code}>error</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

// Error.prototype = {
//   children: PropTypes.node.isRequired,
// };
export default Error;

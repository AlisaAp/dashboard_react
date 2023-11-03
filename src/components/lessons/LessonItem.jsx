// import React from 'react';
// import { Button, Panel } from "rsuite";
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// import s from './style.module.css';
//
// function LessonItem({ homework }) {
//   const {
//     title,
//     link,
//     date,
//     id, courseId,
//   } = homework;
//
//   return (
//     <Panel bordered className={`${s.item}${s.container}`}>
//       <div className={s.title}>
//         {title}
//       </div>
//       <hr />
//       <div className="homework-item_date">
//         <div className={s.date}>
//           {date}
//         </div>
//         {link}
//       </div>
//       <hr />
//       <div>
//         <Button
//           as={Link}
//           to={`/:courses_:${courseId}/:homeworks/:${id}`}
//         >
//           Читать
//         </Button>
//       </div>
//     </Panel>
//   );
// }
//
// LessonItem.propTypes = {
//   homework: PropTypes.objectOf(PropTypes.string),
// };
// export default LessonItem;

// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useGetHomeworksByCourseQuery } from "../store/api/homeworksApi";
//
// function getHomeworks() {
//   const courseId = useParams().id;
//   const userId = useSelector((state) => state.authentication.currentUser);
//   const { data: homeworks, isLoading } = useGetHomeworksByCourseQuery({
//     userId, courseId,
//   });
//   return {
//     homeworks, isLoading,
//   };
// }
// export default getHomeworks;

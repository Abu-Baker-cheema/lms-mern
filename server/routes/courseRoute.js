import express from 'express'
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from './../utils/multer.js';
import {
    createCourse,
    createLecture,
    editLecture,
    getCourseById,
    getCourseLecture,
    getCreatorCourses,
    getLectureById,
    getPublishedCourse,
    removeLecture,
    togglePublishCourse,
    updateCourse
} from '../controllers/courseController.js';


const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);
router.route("/published-courses").get(isAuthenticated, getPublishedCourse)
router.route("/").get(isAuthenticated, getCreatorCourses);
router.route("/:courseId").put(isAuthenticated, upload.single("courseThumbnail"), updateCourse);
router.route("/:courseId").get(isAuthenticated, getCourseById);
router.route("/:courseId/lecture").post(isAuthenticated, createLecture);
router.route("/:courseId/lecture").get(isAuthenticated, getCourseLecture);
router.route("/:courseId/lecture/:lectureId").post(isAuthenticated, editLecture);
router.route("/lecture/:lectureId").delete(isAuthenticated, removeLecture);
router.route("/lecture/:lectureId").get(isAuthenticated, getLectureById);
router.route("/:courseId").patch(isAuthenticated, togglePublishCourse)


export default router;
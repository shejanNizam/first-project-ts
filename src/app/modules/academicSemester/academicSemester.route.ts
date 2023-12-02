import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { academicSemesterControllers } from "./academicSemester.controller";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidations.createAcademicsSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);

router.get(
  "/:semesterId",
  academicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  "/:semesterId",
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.updateAcademicSemester,
);

router.get("/", academicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;

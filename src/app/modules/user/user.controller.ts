/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  // const zodParsedData = studentValidationSchema.parse(studentData);

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};

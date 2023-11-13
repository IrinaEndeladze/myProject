import dayjs from "dayjs";

type ICourseData = {
  id: number;
  course_name: string;
  course_difficulty: string;
  teacher_id: number;
  start_date: dayjs.Dayjs[];
  end_date: dayjs.Dayjs[];
  image?: string;
  teacher?: string;
};

export default ICourseData;

type ICourseData = {
  id: number;
  course_name: string;
  course_difficulty: string;
  teacher_id: number;
  start_date: string;
  end_date: string;
  image?: string;
  teacher?: string;
};

export default ICourseData;

import AddCourse from "@/components/addCourse";

async function getCourseData() {
  const res = await fetch(`http://localhost:3000/api/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Course = async () => {
  const courseData = await getCourseData();

  return (
    <div className="bg-secondaryBg px-[30px] flex flex-col">
      <AddCourse courseData={courseData} />
    </div>
  );
};

export default Course;

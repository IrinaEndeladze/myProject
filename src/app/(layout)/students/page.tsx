import AddStudents from "@/components/addStudents";

async function getStudentsData() {
  const res = await fetch(`http://localhost:3000/api/students`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Students = async () => {
  const studentsData = await getStudentsData();

  return (
    <div className="bg-secondaryBg px-[30px] flex flex-col">
      <AddStudents studentsData={studentsData} />
    </div>
  );
};

export default Students;

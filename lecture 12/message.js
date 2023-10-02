// arrow function
const message = () => {
	const header = "<div style ='text-align: center;'><h1> Personal Information </h1></div>"
	const name = "Dhea Jetjelicha Nanlohy";
	const age = 19;
	const status = "Single";
	const major = "Informatics";
	const faculty = "Computer Science";
	const address = "Jl. Kampus Timur Ling II"
	const interest = "Data Science"
	return header +'<strong><hr>Name:</strong>'+ name + ' <br> <strong> Age: </strong>' + age + ' <br> <strong> Status: </strong>'+status +' <br> <strong> Major: </strong>'+major +' <br> <strong> Faculty: </strong>'+faculty +' <br> <strong> Address: </strong>'+address+ ' <br> <strong> Interest: </strong>'+interest;
};
// export
export default message;
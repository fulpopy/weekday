import axios from "axios";

export const getJobs = async (offset) => {
  console.log(offset);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: `${offset}`,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  let res = await axios(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  // console.log(filteredData);
  return res.data.jdList;
};

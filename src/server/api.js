import axios from "axios";

export const getJobs = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
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
  const filteredData = res.data.jdList.filter((obj) =>
    Object.values(obj).every((value) => value !== null)
  );
  // console.log(filteredData);
  return filteredData;
};

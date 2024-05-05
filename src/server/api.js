import axios from "axios";

export const getJobs = async (offset) => {
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

  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  let res = await response.json();
  return res.jdList;
};

export const getJobsApi = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 10,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  let res;
  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.text())
    .then((result) => (res = result))
    .catch((error) => console.error(error));
  console.log(res);
};

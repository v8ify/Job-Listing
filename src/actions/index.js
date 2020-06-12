const config = ["role", "level", "languages", "tools"];

export const parseJobsList = fetchData => {
  const jsonData = fetchData.map(obj => {
    let criteriaArray = [];
    config.forEach(item => {
      if (obj[item]) {
        if (Array.isArray(obj[item])) {
          criteriaArray = criteriaArray.concat(obj[item]);
        } else {
          criteriaArray.push(obj[item]);
        }
      }
    });

    obj.filters = criteriaArray;
    return obj;
  });

  return { type: "COMPLETE_JOBS_LIST", payload: jsonData };
};

export const addFilters = filter => {
  return { type: "ADD_FILTERS", payload: filter };
};

export const deleteFilters = filter => {
  return { type: "DELETE_FILTERS", payload: filter };
};

export const displayList = () => {
  return (dispatch, getState) => {
    const jobList = getState().completeJobsList;
    console.log(jobList);
    const filters = getState().filters;
    console.log(filters);
    const jobsToShow = [];

    if ((filters[0] === "" && filters.length === 1) || filters.length === 0) {
      dispatch({ type: "JOBS_TO_SHOW", payload: jobList });
    } else {
      jobList.forEach(job => {
        let condition = true;
        for (let i = 0; i < filters.length; i++) {
          console.log(filters[i]);
          if (!job.filters.includes(filters[i])) {
            condition = false;
            break;
          }
        }
        if (condition) {
          jobsToShow.push(job);
        }
      });

      dispatch({ type: "JOBS_TO_SHOW", payload: jobsToShow });
    }
  };
};

export const API_URL = process.env.REACT_APP_BACKEND_URL!;

// FIXME: replace them
export const createJobUrl = `${API_URL}/jobs`;
export const fetchSkillsUrl = `${API_URL}/skills`;

export const TOKEN_KEY = "JOB_SEARCH_APP_TOKEN_KEY";
export const USER_ID_KEY = "JOB_SEARCH_APP_USER_ID_KEY";

export const REACT_QUERY_KEY_SKILLS = "skills";

export const REACT_QUERY_KEY_GET_JOBS = "jobs";
export const REACT_QUERY_KEY_SEARCH_JOBS = "search-jobs";

export const ITEMS_PER_PAGE = 5;

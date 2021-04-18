import Increment from "./Sample/Increment.js";
import Testing from "./Testing.js";

const increment = Testing(Increment);
increment(10).is.equalTo(11);
increment(10).is.not.not.equalTo(11);
increment(10).is;
increment(10).is.not.equalTo(-1);
increment(10).is.not.equalTo(100);
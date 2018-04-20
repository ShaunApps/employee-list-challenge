function removeDuplicates(arr) {
  let unique_array = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique_array.indexOf(arr[i]) == -1) {
      unique_array.push(arr[i]);
    }
  }
  return unique_array;
}

function formatPhoneNumber(s) {
  let x = s
    .replace(/[^\d]+/g, "")
    .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  return x;
}

export function phoneNumber(phone) {
  if (phone) {
    let x = phone.indexOf("x") + 1;
    let ext = phone.slice(x);
    let number = phone.indexOf("x") > 0 ? phone.slice(0, x) : phone;
    if (number.slice(0, 2) == "1-") {
      number = number.slice(2);
    }
    return formatPhoneNumber(number);
  } else return "N/A";
}

export function formatDate(dob) {
  if (dob) {
    let formattedDate = Date.parse(dob);
    let date = new Date(dob);
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dateStr = month + "/" + day + "/" + year;
    return dateStr;
  }
}

export function formatEmail(email) {
  return (email = email ? email : "N/A");
}

export function formatTags(tags) {
  let tagArray = [];
  let formattedTags;
  for (var i in tags) {
    tagArray.push(tags[i]);
  }
  return (formattedTags =
    tagArray.length > 0
      ? removeDuplicates(tagArray).join(", ")
      : "No tags yet");
}

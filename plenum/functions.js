function funktion1(name) {
  console.log(name);
  return name;
}
funktion1("Hans");

const funktion2 = function(name) {
  console.log(name);
  return name;
};
funktion2("Hans");

const funktion3 = (name) => {
  console.log(name);
  return name;
}
funktion3("Hans");

const funktion4 = (name) => console.log(name) && name;
funktion4("Hans");

const funktion5 = name => console.log(name) && name;
funktion5("Hans");

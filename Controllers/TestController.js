const data = [{ nom: "ameurlain", prenom: "walid" }, 'z', 4];


const show = (req, res) => {
  return res.json(data);
}
const create=(req, res)=>{
  console.log(req.body);
  
  return res.json(req.body);
}


module.exports = { show,create };
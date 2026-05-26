const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();

mongoose.connect("mongodb+srv://pedro:pedro123@cluster0.utfiv0w.mongodb.net/?appName=Cluster0");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const Usuario = mongoose.model("Usuario", {
  usuario: String,
  email: String,
  senha: String
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {

  res.render("login", {
    erro: null
  });

});

app.get("/register", (req, res) => {

  res.render("register", {
    erro: null
  });

});

app.post("/register", async (req, res) => {

  const existe = await Usuario.findOne({
    email: req.body.email
  });

  if(existe){

    return res.render("register", {
      erro: "E-mail já cadastrado"
    });

  }

  const senhaHash = await bcrypt.hash(req.body.senha, 10);

  await Usuario.create({
    usuario: req.body.usuario,
    email: req.body.email,
    senha: senhaHash
  });

  res.redirect("/login");
});

app.post("/login", async (req, res) => {

  if(
    req.body.email === "admin" &&
    req.body.senha === "102030"
  ){

    const usuarios = await Usuario.find();

    return res.render("admin", {
      usuarios
    });
  }

  const user = await Usuario.findOne({
    email: req.body.email
  });

  if (!user) {

  return res.render("login", {
    erro: "Usuário não encontrado"
   });

  }

  const senhaCorreta = await bcrypt.compare(
    req.body.senha,
    user.senha
  );

  if (!senhaCorreta) {

  return res.render("login", {
    erro: "Senha incorreta"
   });

  }

  res.render("success", {
    usuario: user.usuario
  });
});

app.get("/delete/:id", async (req, res) => {

  await Usuario.findByIdAndDelete(req.params.id);

  res.redirect("/admin");
});

app.get("/edit/:id", async (req, res) => {

  const usuario = await Usuario.findById(req.params.id);

  res.render("edit", {
    usuario
  });
});

app.post("/edit/:id", async (req, res) => {

  await Usuario.findByIdAndUpdate(
    req.params.id,
    {
      usuario: req.body.usuario,
      email: req.body.email
    }
  );

  res.redirect("/admin");
});

app.get("/admin", async (req, res) => {

  const usuarios = await Usuario.find();

  res.render("admin", {
    usuarios
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando");
});

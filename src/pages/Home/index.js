import React, { useRef, useState, useEffect } from "react";

import { FiArrowDown } from "react-icons/fi";

import { RiImageAddFill } from "react-icons/ri";

import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";
import FirebaseService from "../../services/FirebaseService";
import { storageRef } from "../../utils/firebaseUtils";

import {
  Container,
  Banner,
  LogoContainer,
  Button,
  Form,
  InputGroup,
  Data,
  Photo,
  FormContainer,
  BtnSend,
  Success,
  Loading,
} from "./styles";

import logo from "../../assets/logo.png";

function Home() {
  const myRef = useRef(null);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const executeScroll = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // document.getElementById("phone").addEventListener("blur", function (e) {
    //   const x = e.target.value
    //     .replace(/\D/g, "")
    //     .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    //   e.target.value = !x[2]
    //     ? x[1]
    //     : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ""}`;
    // });

    if (window.location.hash === "#register") {
      executeScroll();
    }
  }, [window.location.hash]);

  const initialAtletaState = {
    nome: "",
    apelido: "",
    data_nascimento: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    telefone: "",
    instagram: "",
    foto_url: "",
    status: "pending",
  };
  const [atleta, setAtleta] = useState(initialAtletaState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAtleta({ ...atleta, [name]: value });
  };
  const validation = () => {
    if (atleta.nome === "") {
      toast.error("Necessário preencher campo Nome");
      return false;
    }
    if (atleta.data_nascimento === "") {
      toast.error("Necessário preencher campo Data de Nascimento");
      return false;
    }
    if (atleta.bairro === "") {
      toast.error("Necessário preencher campo Bairro");
      return false;
    }
    if (atleta.rua === "") {
      toast.error("Necessário preencher campo Logradouro");
      return false;
    }
    if (atleta.numero === "") {
      toast.error("Necessário preencher campo Número");
      return false;
    }

    if (atleta.telefone === "") {
      toast.error("Necessário preencher campo Telefone");
      return false;
    }
    if (image.raw === null || image.raw === "" || image.raw === undefined) {
      toast.error("Necessário escolher uma foto");
      return false;
    }

    return true;
  };

  const saveAtleta = () => {
    if (!validation()) {
      return false;
    }
    setLoading(true);
    const data = {
      nome: atleta.nome,
      apelido: atleta.apelido,
      data_nascimento: atleta.data_nascimento,
      bairro: atleta.bairro,
      rua: atleta.rua,
      numero: atleta.numero,
      complemento: atleta.complemento,
      telefone: atleta.telefone,
      instagram: atleta.instagram,
      status: "pending",
    };

    const uploadTask = storageRef
      .ref("All_Files/")
      .child(image.raw.name)
      .put(image.raw);

    console.log(uploadTask);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log("error:-", error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          data.foto_url = downloadURL;
          FirebaseService.create(data)
            .then(() => {
              setSubmitted(true);
              setLoading(false);
            })
            .catch((e) => {
              console.log(e);
              setLoading(false);
            });
        });
      }
    );
  };

  //   const saveAtleta = () => {
  //     console.log(image);
  //     console.log(image.raw);
  //     FirebaseService.upload(image.raw).then((url) => {
  //       console.log(url);
  //       const data = {
  //         nome: atleta.nome,
  //         apelido: atleta.apelido,
  //         data_nascimento: atleta.data_nascimento,
  //         bairro: atleta.bairro,
  //         rua: atleta.rua,
  //         numero: atleta.numero,
  //         complemento: atleta.complemento,
  //         telefone: atleta.telefone,
  //         instagram: atleta.instagram,
  //         foto_url: url,
  //         status: "pending",
  //       };

  //       FirebaseService.create(data)
  //         .then(() => {
  //           setSubmitted(true);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //         });
  //     });
  //   };

  const newAtleta = () => {
    setAtleta(initialAtletaState);
    setImage("");
    setSubmitted(false);
  };

  const handleImageChange = (event) => {
    console.log(event.target.files[0].size);
    if (event.target.files[0].size > 1000000) {
      toast.error(
        "Imagem excede o limite de 1MB, por favor selecione outra com menor tamanho."
      );
      return;
    }
    setImage({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };

  const inputTypeDate = () => {
    document.getElementById("date").type = "date";
  };

  return (
    <Container>
      <Banner>
        <LogoContainer>
          <img src={logo} alt="ASO" />
        </LogoContainer>
        <Button onClick={executeScroll}>
          CADASTRAR <FiArrowDown />
        </Button>
      </Banner>
      {submitted ? (
        <Success ref={myRef}>
          <h2>Deu bom!</h2>
          <h3>Olinda Surf Clube agradece sua inscrição!</h3>
          <h3>Em breve entraremos em contato.</h3>

          <BtnSend onClick={newAtleta}>Novo</BtnSend>
        </Success>
      ) : (
        <>
          <Loading ref={myRef} loading={loading}>
            <VscLoading />
            <span>Aguarde...</span>
          </Loading>
          <Form ref={myRef} loading={loading}>
            <h1>Formulário de Cadastro</h1>
            <FormContainer>
              <Data>
                <InputGroup>
                  <input
                    name="nome"
                    type="text"
                    placeholder="Nome Completo *"
                    value={atleta.nome}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    name="apelido"
                    type="text"
                    placeholder="Apelido"
                    value={atleta.apelido}
                    onChange={handleInputChange}
                  />

                  <input
                    id="date"
                    name="data_nascimento"
                    type="text"
                    placeholder="Data Nascimento *"
                    value={atleta.data_nascimento}
                    onChange={handleInputChange}
                    onFocus={inputTypeDate}
                  />
                </InputGroup>

                <InputGroup>
                  <input
                    name="bairro"
                    type="text"
                    placeholder="Bairro *"
                    value={atleta.bairro}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    name="rua"
                    type="text"
                    placeholder="Logradouro *"
                    value={atleta.rua}
                    onChange={handleInputChange}
                  />
                  <input
                    name="numero"
                    type="number"
                    placeholder="Número *"
                    value={atleta.numero}
                    onChange={handleInputChange}
                  />
                  <input
                    name="complemento"
                    type="text"
                    placeholder="Complemento"
                    value={atleta.complemento}
                    onChange={handleInputChange}
                  />
                </InputGroup>

                <InputGroup>
                  <input
                    id="phone"
                    name="telefone"
                    type="number"
                    placeholder="Número Telefone (55) 55555-5555 *"
                    value={atleta.telefone}
                    onChange={handleInputChange}
                  />
                  <input
                    name="instagram"
                    type="text"
                    placeholder="Instagram"
                    value={atleta.instagram}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Data>
              <Photo>
                {image.preview ? (
                  <label>
                    <input onChange={handleImageChange} type="file" />
                    <img
                      src={image.preview}
                      alt="Foto"
                      accept="image/*"
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                ) : (
                  <>
                    <span>Adicione uma foto</span>
                    <label>
                      <input
                        id="img"
                        onChange={handleImageChange}
                        type="file"
                      />
                      <RiImageAddFill />
                    </label>
                  </>
                )}
              </Photo>
            </FormContainer>
            <BtnSend onClick={saveAtleta}>Enviar </BtnSend>
          </Form>
        </>
      )}
    </Container>
  );
}

export default Home;

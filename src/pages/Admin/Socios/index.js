import React, { useEffect, useState } from "react";

import { VscLoading } from "react-icons/vsc";
import {BsFillPersonFill} from 'react-icons/bs';
import {GoCalendar} from 'react-icons/go';
import {IoIosHome, IoIosPhonePortrait, IoLogoInstagram} from 'react-icons/io'
import { toast } from "react-toastify";
import Moment from 'moment';
import {
  Container,
  Content,
  Socio,
  Description,
  Scroll,
  BtnGroup,
  AlertEmpty
} from "./styles";

import FirebaseService from "../../../services/FirebaseService";

function Socios(props) {
  const [sociosList, setSociosList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Moment.locale('pt');
    const db = FirebaseService.getAll();
    setLoading(true);

    db.on("value", (snapshot) => {
      // var key = Object.keys(snapshot.val())[0];
      const sociosArray = [];
      snapshot.forEach((snap) => {
        console.log(snap);
        // snap.val() is the dictionary with all your keys/values from the 'students-list' path
        sociosArray.push({
          key: snap.key,
          data: snap.val(),
        });
      });
      console.log(sociosArray);
      const sociosListStatus = [];
      sociosArray.forEach((socio) => {
        console.log(socio);
        if (socio.data.status === props.status) {
          sociosListStatus.push(socio);
        }
      });
      setLoading(false);
      console.log(sociosListStatus);
      setSociosList(sociosListStatus);
    });
  }, [props]);

  function handleActive(socio){
    socio.data.status = "active";
    
    FirebaseService.update(socio.key, socio.data).then(function (response) {
      console.log(response);
      toast.success(`${socio.data.nome} foi ativado.`);
    });
  }
 

  const handleDelete = (socio) => {

    socio.data.status = "inative";
    
    FirebaseService.update(socio.key, socio.data).then(function (response) {
      console.log(response);
      toast.success(`${socio.data.nome} foi excluído.`);
    });
  };

  return (
    <Container>
      <Content>
        {loading ? (
          <VscLoading />
        ) : (
          
          <Scroll>
            {sociosList.length > 0 ? (
              <>
                {sociosList.map((socio) => (
                  <Socio>
                    <div id="img-description">
                      <img src={socio.data.foto_url} alt="Foto" />
                      <Description>
                      <span>{socio.data.apelido}</span>
                        <span><BsFillPersonFill />  {socio.data.nome}</span>
                        
                        <span><GoCalendar />{Moment(socio.data.data_nascimento).format('DD/MM/yyyy')}</span>
                        <span><IoIosHome />
                          {socio.data.rua} , {socio.data.numero} ,{" "}
                          {socio.data.complemento}, {socio.data.bairro}
                        </span>
                        <span><IoIosPhonePortrait />{socio.data.telefone}</span>
                        <span><IoLogoInstagram />{socio.data.instagram}</span>
                      </Description>
                    </div>
                    <aside>
                      {props.status === "inative" && (
                        <>
                          <button onClick={() => handleActive(socio)} type="button">Ativar</button>
                          <span>Inativo</span>
                        </>
                      )}
                      {props.status === "active" && (
                        <>
                          <button onClick={() => handleDelete(socio)}>Excluir</button>
                          <span>Ativo</span>
                        </>
                      )}
                      {props.status === "pending" && (
                        <>
                          <BtnGroup>
                            <button onClick={() => handleActive(socio)} >
                              Ativar
                            </button>
                            <button onClick={() => handleDelete(socio)} >
                              Excluir
                            </button>
                          </BtnGroup>
                          <span>Pendente</span>
                        </>
                      )}
                    </aside>
                  </Socio>
                ))}
              </>
            ): (
              <>
              {props.status=='active' && (
                <AlertEmpty>
                <span>Não existem sócios com status ATIVO.</span>
               </AlertEmpty> 
              )}
              {props.status=='pending' && (
                <AlertEmpty>
                <span>Não existem sócios com status PENDENTE.</span>
               </AlertEmpty> 
              )}
              {props.status=='inative' && (
                <AlertEmpty>
                <span>Não existem sócios com status INATIVO.</span>
               </AlertEmpty> 
              )}
             </>
            )}
          </Scroll>
        )}
      </Content>
    </Container>
  );
}

export default Socios;

import "./styles.css";
import Header from "./components/header/Header";
import Section from "./components/sections/Section";
import ListItem from "./components/listitem/Listitem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/category/dota-2",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg",
    alt: "Imagem do jogo Dota2"
  },
  {
    url: "https://www.twitch.tv/directory/category/northgard",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/495856_IGDB-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  }
];

const channelsListData = [
  {
    url: "https://www.twitch.tv/ricardoklaus",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9dc2def1-b775-40e1-9a0c-a90aaaa787a5-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    url: "https://www.twitch.tv/gabugaru",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/7ca2a36a-802f-40fe-92f6-e5f5a00eba49-profile_image-150x150.png",
    alt: "Imagem de Gabugaru"
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-150x150.png",
    alt: "Imagemd de Cellbit"
  }
];

const socialListData = [
  {
    url: "https://instagram.com",
    imageUrl: "./assets/instagram.svg",
    alt: "Instagram do Allyson Gerald"
  },
  {
    url: "",
    imageUrl: "./assets/twitter.svg",
    alt: "Twiter do Allyson Gerald"
  },
  {
    url: "",
    imageUrl: "./assets/twitch.svg",
    alt: "Twitch do Allyson Gerald"
  },
  {
    url: "",
    imageUrl: "./assets/youtube.svg",
    alt: "Youtube do Allyson Gerald"
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus Jogos" subtitle="Os games que eu mais curto jogar!" className="games-list">
          {
            gamesListData.map(function (item) {
              return ( 
                <ListItem url={item.url} imageUrl={item.imageUrl} alt={item.alt}/> 
              );
            })
          }
        </Section>

        <Section title="Meus Canais e Streamers" subtitle="Lista de canais e transmissões que não perco!" className="channel-list">
          {
            channelsListData.map(function (item) {
              return ( 
                <ListItem url={item.url} imageUrl={item.imageUrl} alt={item.alt}/> 
              );
            })
          }
        </Section>
        
        <Section title="Minhas Redes" subtitle="Se conecte comigo agora mesmo!" className="social-list">

          {
            socialListData.map(function (item) {
              return ( 
                <ListItem url={item.url} imageUrl={item.imageUrl} alt={item.alt}/> 
              );
            })
          }
        </Section>
      </main>
      {/* Incluir footer aqui  */}
    </div>
  );
}

export default App;

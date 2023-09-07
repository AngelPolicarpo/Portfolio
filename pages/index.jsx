import Image from "next/image";
import minhaImagem from '../public/assets/img/Me.png';

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "Angel Policarpo",
        description: "Conheça Angel Policarpo, um desenvolvedor Full Stack.",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com"
        }
      }
    }
  }
}

export default function Home() {

  return (
    <>
      <div className="mt-12 mb-12 px-6">
        <div className='flex sm:flex-col justify-center items-center gap-6'>
          <Image
            src={minhaImagem}
            alt="Avatar"
            width={75}
            height={100}
            style={{ backgroundColor: '#fff5', borderRadius: '50%', border: '3px solid #1F1F1F55' }}
          />
          <p className='intro-text'>Me chamo Angel Policarpo, sou desenvolvedor Full Stack experiente em TypeScript. Buscando aperfeiçoamento em MERN Stack, Next e TailWind. Planos de iniciar a graduação em TI ano que vem.</p>
        </div>
       
      </div>
      <div className="mt-6 mb-12 flex justify-center">
        <button className="button-31" title="Baixar Curriculum Vitae" role="button">BAIXAR CV</button>
      </div>
      <div className="flex gap-6 mt-12 mb-12 upscale">
        <a target="_blank" href="https://github.com/AngelPolicarpo" title="Visite o meu GitHub"  rel="noopener noreferrer">
          <svg className="icons" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/angel-policarpo/" target="_blank" title="Visite o meu Linkedin"  rel="noopener noreferrer">
          <svg className="icons" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
        </a>
        <a href="https://wa.me/+5521935004183?text=Olá, estava olhando seu portifólio." target="_blank" title="Enviar mensagem pelo WhatsApp" rel="noopener noreferrer">
          <svg className="icons" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
        </a>
      </div>    
    </>
  );
}

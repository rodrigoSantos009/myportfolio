import RentCarImage from "../../assets/rent-car.png";
import HabitsImage from "../../assets/habits.png";
import SocialNetworkImage from "../../assets/socialnetwork.jpg";
import ProjetsImage from "../../assets/projectsandtasks.png"
import LoveImage from "../../assets/louve.png";

export const projectsList = [
  {
    type: "Full-Stack",
    projectDetails: {
      title: "Car Rental",
      description: "Projeto de um site de aluguel de carros, onde o usuário pode escolher as datas de retirada e retorno e os carros disponíveis para aquela determinada data.",
      backgroundImage: RentCarImage,
      urls: {
        live: "https://car-rental-web-sooty.vercel.app/",
        github: "https://github.com/rodrigoSantos009/car-rental",
      },
      tecs: {
        react: true,
        typescript: true,
        nodejs: false,
        prisma: true,
        mysql: false,
        firebase: false,
        tailwindcss: true,
      }
    }
  },
  {
    type: "Full-Stack",
    projectDetails: {
      title: "Habits",
      description: "Projeto de um site de hábitos, onde o usuário pode criar seus hábitos e distribuir na semana nos dias que preferir, podendo marcar como concluídos os hábitos feitos naquele determinado dia.",
      backgroundImage: HabitsImage,
      urls: {
        live: "https://habbitsday.netlify.app/",
        github: "https://github.com/rodrigoSantos009/habits"
      } ,
      tecs: {
        react: true,
        typescript: true,
        nodejs: true,
        prisma: true,
        mysql: true,
        firebase: false,
        tailwindcss: false,
      }
    }
  },
  {
    type: "backend",
    projectDetails: {
      title: "SocialNetwork",
      description: "Projeto de uma API de uma rede social, onde os usuários podem seguir e serem seguidos por outros.",
      backgroundImage: SocialNetworkImage,
      urls: {
        live: null,
        github: "https://github.com/rodrigoSantos009/social-networking"
      } ,
      tecs: {
        react: false,
        typescript: true,
        nodejs: true,
        prisma: true,
        mysql: true,
        firebase: false,
        tailwindcss: false,
      }
    }
  },
  {
    type: "backend",
    projectDetails: {
      title: "Projets and Tasks",
      description: "Projeto de uma API de projetos e tarefas, onde o usuário cria um projeto e nele pode adicionar quantas tarefas seja necessário e ao finalizar todas as tarefas de um projeto, o projeto será finalizado.",
      backgroundImage: ProjetsImage,
      urls: {
        live: null,
        github: "https://github.com/rodrigoSantos009/projects-and-tasks"
      } ,
      tecs: {
        react: false,
        typescript: true,
        nodejs: true,
        prisma: true,
        mysql: true,
        firebase: false,
        tailwindcss: false,
      }
    }
  },
  {
    type: "mobile",
    projectDetails: {
      title: "Louve",
      description: "Projeto de um aplicativo, onde o usuário poderá criar agendamentos para ensaios em seu grupo, o app permite adicionar pessoas ao agendamento, como também adicionar a playlist que será ensaiada.",
      backgroundImage: LoveImage,
      urls: {
        live: null,
        github: "https://github.com/rodrigoSantos009/social-networking"
      } ,
      tecs: {
        react: true,
        typescript: true,
        nodejs: false,
        prisma: false,
        mysql: false,
        firebase: true,
        tailwindcss: false,
      }
    }
  },
  {
    type: "mobile",
    projectDetails: {
      title: "HabitsImage",
      description: "Projeto de um app de hábitos, onde o usuário pode criar seus hábitos e distribuir na semana nos dias que preferir, podendo marcar como concluídos os hábitos feitos naquele determinado dia.",
      backgroundImage: HabitsImage,
      urls: {
        live: null,
        github: "https://github.com/rodrigoSantos009/habits/tree/master/mobile"
      } ,
      tecs: {
        react: true,
        typescript: true,
        nodejs: true,
        prisma: true,
        mysql: true,
        firebase: false,
        tailwindcss: false,
      }
    }
  }
];

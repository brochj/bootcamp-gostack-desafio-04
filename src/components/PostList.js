import React, { Component } from 'react';

import PostItem from './PostItem'

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Oscar Broch',
          avatar: 'https://avatars2.githubusercontent.com/u/39439329?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando post, pode me chamar no discord! (Sério, me chamem mesmo, esse comentário é real"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Júlio Alcantara',
          avatar: 'https://avatars2.githubusercontent.com/u/39439329?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: 'log weather certainly nodded classroom speak bat whale upon composed air saved happily history pack impossible forward member aside whispered might fish farther parallel',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/39439329?s=460&v=4'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando post, pode me chamar no discord! (Sério, me chamem mesmo, esse comentário é real"
          },
          {
            id: 2,
            author: {
              name: 'Clara lisboas',
              avatar: 'https://avatars2.githubusercontent.com/u/39439329?s=460&v=4'
            },
            content: "Também estou fazendo o Bootcamp e estou chicken village bottle met gain somewhere duty continued entire experience which person dawn worth full bright eleven setting soap source perfect father tribe universe"
          },
          {
            id: 3,
            author: {
              name: 'Filipe Deschamps',
              avatar: 'https://avatars2.githubusercontent.com/u/39439329?s=460&v=4'
            },
            content: "note everywhere frog gold no north soap daughter shot development column river describe greater tool military brush certainly split threw white different told steampale eleven else stick policeman uncle note cookies rest muscle thus too its bear combination season learn evening thought owner she beautiful available naturalcall twenty strange forgot limited outside grew somehow monkey range loss pocket kind shells fully begun unknown remain means consider so breathing may atomic"
          }
        ],
      },
      {
        id: 3,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://avatars2.githubusercontent.com/u/39439329?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Jose Frank',
              avatar: 'https://avatars2.githubusercontent.com/u/39439329?s=460&v=4'
            },
            content: "deal quick tip dinner sound smile plates heading half scared fence if during seen making instead black ahead before bottle bridge tongue year simplyinvolved suit captain even matter particular scared snow daughter directly package force climb soft softly advice poetry youth shade date left husband speed come"
          }
        ],
      },
    ]
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }

}
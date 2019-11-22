import React, { Component } from 'react';

import PostItem from './PostItem';
import profileCezar from '../assets/profileCezar.png';
import profileClara from '../assets/profileClara.png';
import profileDiego from '../assets/profileDiego.png';
import profileGabriel from '../assets/profileGabriel.png';
import profileJulio from '../assets/profileJulio.png';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: profileJulio,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: profileDiego,
            },
            content:
              'A Rocketseat está em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! ( Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Gabriel List',
          avatar: profileGabriel,
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: profileClara,
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: profileCezar,
            },
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp Gostack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Gabriel List',
          avatar: profileGabriel,
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza? Estou fazendo o Bootcamp Gostack da Rocketseat e está muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: profileClara,
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: profileCezar,
            },
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp Gostack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        {posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </>
    );
  }
}
export default PostList;

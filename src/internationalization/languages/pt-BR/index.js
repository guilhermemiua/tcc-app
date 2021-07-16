export default {
  translation: {
    home: {
      welcome: 'Bem vindo,',
      upcomingEvents: 'Próximos eventos',
      eventHistory: 'Histórico de eventos',
    },
    login: {
      emailLabel: 'E-mail',
      passwordLabel: 'Senha',
      submitButton: 'Login',
      forgotPassword: 'Esqueceu a senha?',
      forgotPasswordButton: 'Clique aqui!',
      error: {
        emailType: 'Insira um email válido',
        emailRequired: 'Insira o email',
        passwordRequired: 'Insira a senha',
      },
    },
    register: {
      successMessage: 'Cadastro realizado com sucesso!',
      errorMessage: 'Erro no cadastro',
      firstStep: {
        firstNameLabel: 'Nome',
        lastNameLabel: 'Sobrenome',
        ageLabel: 'Idade',
        genderLabel: 'Gênero',
        submitButton: 'Avançar',
        error: {
          firstNameRequired: 'Insira o nome',
          lastNameRequired: 'Insira o sobrenome',
          ageRequired: 'Insira a idade',
          genderRequired: 'Insira o gênero',
          cityRequired: 'Insira a cidade',
          stateRequired: 'Insira o estado',
        },
      },
      secondStep: {
        emailLabel: 'Email',
        passwordLabel: 'Senha',
        submitButton: 'Cadastrar',
        error: {
          emailType: 'Insira um email válido',
          emailRequired: 'Insira um email',
          passwordRequired: 'Insira uma senha',
        },
      },
    },
    editProfile: {
      firstNameLabel: 'Nome',
      lastNameLabel: 'Sobrenome',
      ageLabel: 'Idade',
      genderLabel: 'Gênero',
      cityLabel: 'Cidade',
      stateLabel: 'Estado',
      submitButton: 'Salvar',
      successMessage: 'Perfil atualizado com sucesso!',
      errorMessage: 'Erro na atualização do perfil',
      error: {
        firstNameRequired: 'Insira o nome',
        lastNameRequired: 'Insira o sobrenome',
        ageRequired: 'Insira a idade',
        genderRequired: 'Insira o gênero',
        cityRequired: 'Insira a cidade',
        stateRequired: 'Insira o estado',
      },
    },
    changePassword: {
      passwordLabel: 'Nova senha',
      confirmPasswordLabel: 'Confirmar nova senha',
      submitButton: 'Salvar',
      successMessage: 'Senha atualizada com sucesso!',
      errorMessage: 'Erro na atualização da senha',
      error: {
        passwordRequired: 'Insira a nova senha',
        confirmPasswordRequired: 'Insira a confirmação da nova senha',
        equalPassword: 'As senhas devem ser iguais',
      },
    },
    changeEmail: {
      emailLabel: 'Novo email',
      submitButton: 'Salvar',
      successMessage: 'Email atualizado com sucesso!',
      errorMessage: 'Erro na atualização do email',
      error: {
        emailRequired: 'Insira o novo email',
        emailInvalid: 'Email inválido',
      },
    },
    createEvent: {
      cityLabel: 'Cidade',
      stateLabel: 'Estado',
      localLabel: 'Local',
      dateLabel: 'Data',
      startTimeLabel: 'Hora de início',
      endTimeLabel: 'Hora de término',
      playersQuantityLabel: 'Quantidade de jogadores',
      submitButton: 'Criar',
      successMessage: 'Evento criado com sucesso!',
      errorMessage: 'Erro na criação do evento',
      error: {
        cityRequired: 'Insira a cidade',
        stateRequired: 'Insira o estado',
        localRequired: 'Insira o local',
        dateRequired: 'Insira a data',
        startTimeRequired: 'Insira a hora de início',
        endTimeRequired: 'Insira a hora de término',
        playersQuantityRequired: 'Insira a quantidade de jogadores',
        startTimeGreaterThanCurrentTime:
          'Hora de início deve ser maior que a hora atual',
        endTimeGreaterThanStartTime:
          'Hora de término deve ser maior que hora de início',
      },
    },
    editEvent: {
      cityLabel: 'Cidade',
      stateLabel: 'Estado',
      localLabel: 'Local',
      dateLabel: 'Data',
      startTimeLabel: 'Hora de início',
      endTimeLabel: 'Hora de término',
      playersQuantityLabel: 'Quantidade de jogadores',
      submitButton: 'Salvar',
      successMessage: 'Evento editado com sucesso!',
      errorMessage: 'Erro na edição do evento',
      error: {
        cityRequired: 'Insira a cidade',
        stateRequired: 'Insira o estado',
        localRequired: 'Insira o local',
        dateRequired: 'Insira a data',
        startTimeRequired: 'Insira a hora de início',
        endTimeRequired: 'Insira a hora de término',
        playersQuantityRequired: 'Insira a quantidade de jogadores',
        startTimeGreaterThanCurrentTime:
          'Hora de início deve ser maior que a hora atual',
        endTimeGreaterThanStartTime:
          'Hora de término deve ser maior que hora de início',
      },
    },
    events: {
      title: 'Eventos',
      createEvent: 'Criar evento',
      filters: 'Filtros',
    },
    viewEvent: {
      participantsText: 'Participantes',
      settingsText: 'Configurações',
      reviewUsersText: 'Avaliar usuários',
      joinText: 'Participar',
      joinEventSuccessMessage: 'Você agora é um participante do evento!',
      joinEventErrorMessage: 'Erro ao tentar participar do evento',
      removeUserFromEventSuccessMessage: 'Usuário removido com sucesso!',
      removeUserFromEventErrorMessage: 'Erro ao remover usuário do evento',
      userItem: {
        hostLabel: 'Anfitrião',
        removeLabel: 'Remover',
      },
      settings: {
        editEvent: 'Editar evento',
        deleteEvent: 'Deletar evento',
        leftEvent: 'Sair do evento',
        deleteSuccessMessage: 'Evento deletado com sucesso!',
        deleteErrorMessage: 'Erro ao deletar o evento',
        leftSuccessMessage: 'Você saiu do evento com sucesso!',
        leftErrorMessage: 'Erro ao sair do evento',
      },
    },
    reviewPlayers: {
      submitButton: 'Salvar',
      successMessage: 'Avaliação feita com sucesso!',
      errorMessage: 'Erro na avaliação dos usuários',
      error: {
        ratingRequired: 'Insira a avaliação',
      },
    },
    eventChat: {
      errorMessage: 'Erro ao enviar a mensagem',
    },
    chatsSettings: {
      newChat: 'Novo chat',
      newGroupChat: 'Novo chat em grupo',
    },
    newGroupChat: {
      nameLabel: 'Nome',
      submitButton: 'Salvar',
      successMessage: 'Grupo criado com sucesso!',
      errorMessage: 'Erro na criação do grupo',
      error: {
        nameRequired: 'Insira o nome',
      },
    },
    editGroupChat: {
      nameLabel: 'Nome',
      submitButton: 'Salvar',
      successMessage: 'Grupo editado com sucesso!',
      errorMessage: 'Erro na edição do grupo',
      error: {
        nameRequired: 'Insira o nome',
      },
    },
    addUserToGroup: {
      successMessage: 'Usuário adicionado com sucesso!',
      errorMessage: 'Erro na adição do usuário',
    },
    viewGroup: {
      settings: {
        addUsers: 'Adicionar usuários',
        editGroup: 'Editar grupo',
        deleteGroup: 'Deletar grupo',
        leftGroup: 'Sair do grupo',
        deleteSuccessMessage: 'Grupo deletado com sucesso!',
        deleteErrorMessage: 'Erro ao deletar o grupo',
        leftSuccessMessage: 'Você saiu do grupo com sucesso!',
        leftErrorMessage: 'Erro ao sair do grupo',
        removeUserFromGroupSuccessMessage: 'Usuário removido com sucesso!',
        removeUserFromGroupErrorMessage: 'Erro ao remover usuário do grupo',
      },
    },
    profile: {
      title: 'Perfil',
      editProfileButton: 'Editar perfil',
      age: 'Idade',
    },
    viewUser: {
      ageLabel: 'Idade',
      cityStateLabel: 'Cidade/Estado',
      sendFriendRequestButton: 'Enviar solicitação de amizade',
      answerFriendRequestButton: 'Responder solicitação de amizade',
      removeFriendButton: 'Remover amizade',
      cancelFriendRequestButton: 'Cancelar solicitação de amizade',
      sendFriendRequestSuccess: 'Solicitação de amizade enviada com sucesso!',
      sendFriendRequestError: 'Erro ao enviar solicitação de amizade',
      removeFriendSuccess: 'Amizade removida com sucesso!',
      removeFriendError: 'Erro ao remover amizade',
      cancelFriendRequestSuccess:
        'Solicitação de amizade cancelada com sucesso!',
      cancelFriendRequestError: 'Erro ao cancelar solicitação de amizade',
    },
    addFriend: {
      nameLabel: 'Nome',
      nameInputPlaceholder: 'Pesquisar..',
    },
    friendsNotifications: {
      sentFriendRequest: 'Enviou uma solicitação de amizade.',
    },
    settings: {
      changeLanguage: 'Alterar idioma',
      changeEmail: 'Alterar email',
      changePassword: 'Alterar senha',
      logout: 'Sair',
    },
    changeLanguageModal: {
      title: 'Alterar idioma',
    },
    gender: {
      male: 'Masculino',
      female: 'Feminino',
    },
    routes: {
      changeLanguage: 'Alterar idioma',
      settings: 'Configurações',
      register: 'Cadastrar',
      chooseSport: 'Escolha o esporte',
      createEvent: 'Criar evento',
      editProfile: 'Editar perfil',
      changePassword: 'Alterar senha',
      changeEmail: 'Alterar email',
      editEvent: 'Editar evento',
      eventChat: 'Chat do evento',
      calendar: 'Calendário',
      eventHistory: 'Histórico de eventos',
      addFriend: 'Adicionar amigo',
      notifications: 'Notificações',
      newChat: 'Novo chat',
      newGroupChat: 'Novo chat em grupo',
      reviewPlayers: 'Avaliar participantes',
      editGroup: 'Editar grupo',
      selectCity: 'Selecionar cidade',
      addUsers: 'Adicionar usuários',
    },
    sports: {
      soccer: 'Futebol',
      basketball: 'Basquete',
      tennis: 'Tênis',
      tableTennis: 'Tênis de mesa',
      volleyball: 'Vôlei',
      football: 'Futebol americano',
      baseball: 'Beisebol',
      golf: 'Golfe',
    },
    chatMessageInput: {
      messageLabel: 'Mensagem...',
    },
    selectCity: {
      placeholder: 'Buscar cidade...',
    },
    eventSelectCity: {
      title: 'Selecionar cidade',
      stateLabel: 'Estado',
      cityLabel: 'Cidade',
      submitButton: 'Salvar',
      errorMessage: 'Erro ao selecionar a cidade',
      error: {
        cityRequired: 'Insira a cidade',
        stateRequired: 'Insira o estado',
      },
    },
    mediaPermissionErrorMessage:
      'Precisamos da permissão da câmera para alterar a imagem do perfil',
  },
};

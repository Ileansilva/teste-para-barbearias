# SUA BARBEARIA — Sistema Completo V17 | Caixa + Encaixes + CRM


> Versão final consolidada com todas as atualizações feitas hoje:
> painel multipágina, financeiro anual, rankings, pagamentos, configurações
> sincronizadas com o agendamento, código comentado para revenda e correção
> da geração de horários até o horário de fechamento.


> Esta versão possui comentários no código e um `GUIA-DE-PERSONALIZACAO.txt`
> para facilitar a adaptação do sistema para novos clientes.

# SUA BARBEARIA — Versão Real com Supabase

Esta versão foi preparada para uso real na internet.

## O que mudou
- Agendamentos ficam salvos no **Supabase**
- Cliente agenda no celular e o proprietário vê no painel em outro dispositivo
- Horários ocupados são sincronizados
- Banco impede dois agendamentos ativos no mesmo horário
- Login do proprietário usa **Supabase Auth**
- Serviços, preços e fotos podem ser alterados pelo painel
- Configuração padrão: **08:00 às 19:00**
- Imagens de serviços podem ser enviadas para o Supabase Storage
- Pronto para **GitHub Pages**

## 1. Criar projeto Supabase
1. Entre em https://supabase.com
2. Crie uma conta/projeto
3. Escolha um nome, por exemplo `jk-barbearia`
4. Defina uma senha forte para o banco

## 2. Criar banco
No Supabase:
1. Abra `SQL Editor`
2. Clique em `New query`
3. Abra o arquivo `supabase/schema.sql` deste projeto
4. Copie tudo
5. Cole no SQL Editor e clique em `Run`

## 3. Criar usuário administrador
No Supabase:
1. Authentication
2. Users
3. Add user
4. Crie o e-mail e a senha do proprietário

Esse e-mail/senha será usado em `admin.html`.

## 4. Configurar o site
No Supabase:
1. Project Settings
2. API
3. Copie `Project URL`
4. Copie a chave `anon public`

Depois abra:
`js/config.js`

e substitua:
- `COLE_SUA_SUPABASE_URL_AQUI`
- `COLE_SUA_SUPABASE_ANON_KEY_AQUI`

A chave `anon` pode ficar no site. **Nunca coloque a service_role key no front-end.**

## 5. Rodar localmente
Abra a pasta no VS Code e use Live Server.

## 6. Publicar no GitHub Pages
O projeto já possui:
`.github/workflows/pages.yml`

Depois de enviar para um repositório público na branch `main`:
1. GitHub > Settings
2. Pages
3. Source: GitHub Actions

## Observação importante
A segurança do painel depende das políticas RLS e do Supabase Auth configuradas pelo `schema.sql`.

## Status desta versão
- Supabase conectado: **SIM**
- Banco criado: **SIM**
- Horário padrão: **08:00 às 19:00**
- Serviços iniciais cadastrados: **SIM**
- Agenda compartilhada entre dispositivos: **SIM**
- Repositório GitHub esperado: `Ileansilva/jk-barbearia`

### Único passo ainda necessário no GitHub
A integração do ChatGPT precisa receber permissão de escrita para o repositório `Ileansilva/jk-barbearia`.

## Atualização: múltiplos barbeiros
O sistema agora permite cadastrar vários barbeiros pelo painel administrativo.

Fluxo:
1. Admin > Barbeiros > cadastrar os profissionais.
2. Cliente escolhe serviço + barbeiro + data.
3. O sistema mostra somente os horários livres daquele barbeiro.
4. Dois barbeiros diferentes podem atender no mesmo horário.
5. A duração do serviço é considerada para evitar sobreposição de horários do mesmo barbeiro.

O banco Supabase do projeto já recebeu esta atualização.


## Nova identidade e Galeria de Trabalhos
- Nova logo JK aplicada no cabeçalho, hero, agendamento, painel, favicon e mobile.
- Nova aba **Galeria** no painel administrativo.
- O barbeiro pode enviar uma ou várias fotos pelo celular/computador.
- Pode editar título, legenda, ordem, ocultar/publicar e excluir fotos.
- A home exibe apenas fotos publicadas e possui visualização ampliada (lightbox).
- O banco e o bucket `gallery-images` já foram preparados no Supabase do SUA BARBEARIA.


## Atualização: Financeiro e comissão por barbeiro

O painel administrativo agora permite definir uma porcentagem de comissão para cada barbeiro.

A aba **Financeiro** mostra:
- cortes concluídos hoje;
- cortes concluídos na semana;
- cortes concluídos no mês;
- faturamento bruto;
- total de comissões;
- valor líquido da barbearia;
- resumo individual por barbeiro;
- histórico dos últimos cortes concluídos.

Somente agendamentos com status **concluido** entram nos cálculos financeiros.


## Visual Premium V2

Esta versão moderniza a experiência pública e administrativa:
- cards de serviços compactos e padronizados;
- recorte de imagens em 16:10;
- interface premium com glassmorphism, iluminação ambiente e microanimações;
- painel administrativo mais compacto;
- formulários e tabelas mais confortáveis;
- responsividade revisada para celular.

Os novos arquivos `css/premium-v2.css` e `css/admin-v2.css` ficam carregados por último para eliminar conflitos antigos sem quebrar as funções existentes.


## Administração multipágina V8
O painel administrativo foi separado em páginas individuais: visão geral, agendamentos, serviços, barbeiros, financeiro, galeria e configurações. O perfil do barbeiro também possui página própria. O Financeiro ganhou relatório por período com detalhamento mensal e por profissional.

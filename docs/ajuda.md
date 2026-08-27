# Ajuda — Heurísticas e Diretrizes de Usabilidade

Esta página documenta as heurísticas de usabilidade de **Jakob Nielsen** aplicadas neste portfólio, indicando onde e como cada princípio foi utilizado.

---

## 1. Visibilidade do Status do Sistema

**Descrição:** O sistema deve sempre manter o usuário informado sobre o que está acontecendo, fornecendo feedback adequado em tempo razoável.

**Aplicação neste projeto:**
- A sidebar destaca visualmente a página atual com a cor de tema (`#42b983`), indicando ao visitante em qual seção se encontra.
- O título do navegador exibe "Portfólio - Klayton", contextualizando o usuário sobre o site.

---

## 2. Correspondência entre o Sistema e o Mundo Real

**Descrição:** O sistema deve usar palavras, frases e conceitos familiares ao usuário, seguindo convenções do mundo real.

**Aplicação neste projeto:**
- Nomenclatura das páginas em português e intuitiva: **Sobre**, **Projetos**, **Contato**, **Ajuda** — termos reconhecidos pelo visitante sem necessidade de explicação.
- Uso de ícones e badges familiares (GitHub, LinkedIn, e-mail) na página inicial e de contato.

---

## 3. Controle e Liberdade do Usuário

**Descrição:** Usuários frequentemente escolhem funções por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado.

**Aplicação neste projeto:**
- A sidebar permanece visível em todas as páginas, permitindo navegação livre entre seções sem obrigatoriedade de sequência.
- Não há fluxos forçados ou modais bloqueantes — o visitante pode ir e voltar livremente.

---

## 4. Consistência e Padrões

**Descrição:** Usuários não deveriam ter que inferir se diferentes palavras, situações ou ações significam a mesma coisa.

**Aplicação neste projeto:**
- Layout, tipografia, espaçamento e paleta de cores (`#42b983` como cor de destaque, `#0E76A8` para elementos secundários) são consistentes em todas as páginas.
- Estrutura de títulos (`#`, `##`, `###`) padronizada em todos os arquivos `.md`.
- Efeitos de hover na sidebar (`transform: translateX(4px)`) aplicados uniformemente em todos os links.

---

## 5. Prevenção de Erros

**Descrição:** Melhor do que boas mensagens de erro é um design cuidadoso que evita que problemas ocorram em primeiro lugar.

**Aplicação neste projeto:**
- O formulário de contato utiliza validação nativa do HTML5 (`required`, `type="email"`) para impedir o envio de dados incompletos ou inválidos.
- Links externos abrem em nova aba (`target="_blank"`), evitando que o visitante perca o contexto do portfólio acidentalmente.

---

## 6. Reconhecimento em vez de Memorização

**Descrição:** Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis.

**Aplicação neste projeto:**
- A sidebar com todos os links de navegação está sempre visível — o usuário não precisa memorizar a estrutura do site.
- Títulos claros em cada página eliminam dúvidas sobre o conteúdo exibido.

---

## 7. Flexibilidade e Eficiência de Uso

**Descrição:** Aceleradores, invisíveis para usuários novatos, podem frequentemente acelerar a interação para usuários experientes.

**Aplicação neste projeto:**
- Design responsivo baseado no tema Docsify Vue, adaptado para leitura em dispositivos móveis e desktop.
- URLs diretas para cada seção (`/#/docs/sobre`, `/#/docs/projetos`) permitem acesso rápido e compartilhamento de páginas específicas.

---

## 8. Estética e Design Minimalista

**Descrição:** Diálogos não devem conter informações irrelevantes ou raramente necessárias. Cada unidade extra de informação compete com informações relevantes.

**Aplicação neste projeto:**
- Layout limpo com fundo branco, sem banners publicitários ou elementos desnecessários.
- Informações organizadas em seções claras com separadores (`---`), evitando sobrecarga visual.
- Sidebar compacta com apenas as páginas essenciais.

---

## 9. Ajuda e Documentação

**Descrição:** Mesmo que seja melhor que o sistema seja usado sem documentação, pode ser necessário fornecer ajuda e documentação.

**Aplicação neste projeto:**
- Esta página documenta a estrutura e os princípios de design utilizados, servindo como guia de referência para avaliação e manutenção do portfólio.
- Cada seção do portfólio possui títulos e descrições autoexplicativas.

---

## Referência

> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994. Disponível em: [nngroup.com/articles/ten-usability-heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)

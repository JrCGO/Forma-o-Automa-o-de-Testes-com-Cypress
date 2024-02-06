 // Ciclo de vida

 1. New: Defeito é identificado e cadastrado pela primeira vez.
 2. Assigned: Defeito é atribuído para desenvolvedor avaliar.
 3. Open: Desenvolverdor inicia análise e correção.
 4. Fixed: Desenvolvedor finaliza correção. 
 5. Pending_Retest: Estado de espera para o time de teste. 
 6. Retest: Estado de execução do reteste. 
 7. Verified: Defeito corrigido.
 8. Reopen: Defeito não-corrigido. 
 9. Closed: Corrigido + Testado + Aprovado. 
 10. Duplciate: Efeito já encontrado anteriormente. 
 11. Rejected: Defeito não é novo. 
 12. Deferred: Será corrigido em versões futuras. 
 13. Not_a_bug: Quando a anomalia não é de fato um erro depois de analisado. 

 // Considerações importantes

 * Os processos se adequam ao que o seu time e seu produto precisam.
 * O time precisa estar de acordo e entender todo o fluxo de rastreamento de defeitos.
 * Os defeitos podem e devem ser rastreados em qualquer momento do ciclo de vida do processo de software. 
 * Principais objetivos dos reports de defeitos:
    *"Provê às partes interessadas informações a respeito do evento anômalo de forma a tentar isolar, reproduzir e corrigir o problema ou o potencial problema."
    *"Provê meios para rastrear a qualidade do produto e o impacto destes na atividades de testes e retestes."
    *"Provê ideias para melhoria no processo de desenvolvimento e testes."

* Boa comunicação é essencial.
* Uso eficiente de ferramente de rastreio e report de bugs. 
* Comprometimento proativo da equipe no gerenciamento dos defeitos. 

// Informações de um reporte de defeito

-> Um identificado único
-> Título resumindo o problema
-> Data/Autor
-> Identificação do item sob o teste e do ambiente
-> Fase do ciclo de vida no qual o defeito foi observado
-> Descrição completa do defeito para reprodução
-> Evidências de auxílio na resolução: logs, dumps de banco de dados, screenshots, gravações.
-> Resultado esperado
-> Severidade
-> Urgência/Prioridade
-> Estado do defeito
-> Conclusões/Sugestões
-> Impactos
-> Histórico
-> Referência do teste
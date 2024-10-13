# S.O.L.I.D

SOLID e um acronimo que consolida 5 itens que sao considerados como boas praticas no mundo do desenvolvimento orientado a objetos.

- SRP = Single Responsability Principle
- OCP = Open-closed Principle
- LSP = Liskov Substitution Principle
- ISP = Interface Segragation Principle
- DIP = Dependency Inversion Principle

#### SRP = Single Responsability Principle

Uma classe deve ter apenas uma responsabilidade, a partir do momento que passa a ter mais de uma responsabilidade, comecamos a ferir o SRP.

#### OCP = Open-closed Principle

A classe deve ficar fechada para modificacao mas ao mesmo tempo devemos conseguir abrir essa classe para extensao.

#### LSP = Liskov Substitution Principle

Objetos podem ser substituídos por seus subtipos sem que isso afete a execução correta do programa.

Subclasses devem manter o comportamento similar ao da classe base. Quando sobrescrevemos um metodo herdado, para retornar um boolea ao inves de uma string (string e o default), estamos quebrando o comportamento esperado. Assim, classes que esperam uma string quebram.

#### ISP = Interface Segragation Principle

Uma classe nao e obrigado implementar interfaces que ela nao usara.

#### DIP = Dependency Inversion Principle

Depende de abstracoes (interface) e nao de implementacoes (new Class())
Inverter as dependencias

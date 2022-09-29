// етот файл -  обічній ECMA script module
// здесь хранится главній комп.приложения
// его нужно експортировать в index.js

import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';



// тут перенесли пеінтінг ліст як чілдрен Секціі
// щоб рендерити довільний контент
// прор чілдрен дозволяють створювати композицію
// чілдрени перебирати меп чи редюс нема як, 
// тому що вони не масив,
// це такий абстрактний тип - інколи може бути елементом,
// інколи може бути псевдомасивом, 
//  для роботи із чілдренами в реакті є окремий API
// 


export default function App() {
  return (
    <div>
      <Section title="Most popular">
      <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>
    </div>
  );
}

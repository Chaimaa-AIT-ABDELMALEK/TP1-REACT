import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />

      <h2>Mes voitures :</h2> 

      <Voiture marque="Renault" modele="Clio" couleur="Rouge" />
      <Voiture marque="Peugeot" modele="208" couleur="Bleue" />
      <Voiture marque="Tesla" modele="Model 3" couleur="Blanche" />

      <h2>Listes de courses :</h2>

      <ListeCourses elements={['Pain', 'Lait', 'Œufs']} />
      <ListeCourses elements={['Pommes', 'Bananes', 'Oranges']} />   

    </div>
  );
}

export default App;
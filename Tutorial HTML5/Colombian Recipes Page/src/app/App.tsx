import { useState, useEffect } from 'react';
import { Search, Filter, Heart, UtensilsCrossed } from 'lucide-react';
import { recipes, regions } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { Recipe } from './data/recipes';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Cargar favoritos del localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Guardar favoritos en localStorage
  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  // Filtrar recetas
  const filteredRecipes = recipes.filter(recipe => {
    const matchesRegion = selectedRegion === 'Todas' || recipe.region === selectedRegion;
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFavorites = !showFavoritesOnly || favorites.includes(recipe.id);
    
    return matchesRegion && matchesSearch && matchesFavorites;
  });

  const openRecipeModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <UtensilsCrossed className="size-10" />
            <h1 className="text-4xl text-center">Recetas Típicas de Colombia</h1>
          </div>
          <p className="text-center text-yellow-100 text-lg">
            Descubre los sabores auténticos de cada región colombiana
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Barra de búsqueda y filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="space-y-4">
            {/* Búsqueda */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
              <Input
                type="text"
                placeholder="Buscar recetas por nombre o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-base"
              />
            </div>

            {/* Filtros por región */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="size-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Filtrar por región:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <Button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    variant={selectedRegion === region ? "default" : "outline"}
                    className={selectedRegion === region ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                  >
                    {region}
                  </Button>
                ))}
              </div>
            </div>

            {/* Botón de favoritos */}
            <div className="flex items-center justify-between pt-2 border-t">
              <Button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                variant={showFavoritesOnly ? "default" : "outline"}
                className={showFavoritesOnly ? "bg-red-500 hover:bg-red-600" : ""}
              >
                <Heart className={`size-4 mr-2 ${showFavoritesOnly ? 'fill-white' : ''}`} />
                {showFavoritesOnly ? 'Mostrando favoritos' : 'Ver solo favoritos'}
              </Button>
              
              <div className="flex gap-4 text-sm text-gray-600">
                <Badge variant="secondary" className="py-1">
                  {filteredRecipes.length} recetas encontradas
                </Badge>
                <Badge variant="secondary" className="py-1">
                  <Heart className="size-3 mr-1 fill-red-500 text-red-500" />
                  {favorites.length} favoritas
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de recetas */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={toggleFavorite}
                onClick={() => openRecipeModal(recipe)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <UtensilsCrossed className="size-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl text-gray-600 mb-2">No se encontraron recetas</h3>
            <p className="text-gray-500">
              Intenta con otros términos de búsqueda o cambia los filtros
            </p>
          </div>
        )}
      </div>

      {/* Modal de detalles */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2026 Recetas Típicas de Colombia - Todos los derechos reservados
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Hecho con ❤️ para preservar nuestra cultura gastronómica
          </p>
        </div>
      </footer>
    </div>
  );
}

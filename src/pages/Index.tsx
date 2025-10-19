import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const matchData = {
    league: "PLT Academy",
    date: "19 октября 2024",
    time: "15:15",
    venue: "Стадион Центральный",
    team1: {
      name: "ТИТАН",
      logo: "https://cdn.poehali.dev/projects/5f30f4f6-e1cb-4773-a263-58de623db1ab/files/9f42c927-d43c-4d7d-a59c-ad33c04f59f6.jpg",
      score: 5,
      lineup: [
        { number: "1", name: "Капустин", position: "Вратарь" },
        { number: "17", name: "Корнемет", position: "Капитан", isCaptain: true },
        { number: "36", name: "Ромиделег", position: "" },
        { number: "59", name: "Корнев", position: "" },
        { number: "45", name: "Волков", position: "" },
        { number: "10", name: "Лотос", position: "" },
        { number: "90", name: "Воронов", position: "" },
        { number: "23", name: "Лихачев", position: "" },
        { number: "65", name: "Жуков", position: "" },
        { number: "7", name: "Ворон", position: "" },
        { number: "25", name: "Комаров", position: "Нападающий" },
      ],
      goals: [
        { player: "Комаров", time: "65'", type: "Пенальти" },
        { player: "Корнемет", time: "70'" },
        { player: "Корнемет", time: "83'" },
        { player: "Ромиделег", time: "86'" },
        { player: "Комаров", time: "90+2'" },
      ],
      stats: {
        shots: 36,
        shotsOnTarget: 25,
      }
    },
    team2: {
      name: "ЛЕГИОН",
      logo: "https://cdn.poehali.dev/projects/5f30f4f6-e1cb-4773-a263-58de623db1ab/files/85bb99f2-19d9-451b-b643-b5391368a695.jpg",
      score: 2,
      lineup: [
        { number: "1", name: "Морозов", position: "Вратарь" },
        { number: "19", name: "Соколов", position: "Капитан", isCaptain: true },
        { number: "12", name: "Тигинр", position: "" },
        { number: "67", name: "Лоров", position: "" },
        { number: "41", name: "Кубков", position: "" },
        { number: "6", name: "Жезлов", position: "" },
        { number: "9", name: "Железов", position: "" },
        { number: "35", name: "Шаров", position: "", redCard: true },
        { number: "25", name: "Иванов", position: "" },
        { number: "65", name: "Козлов", position: "" },
        { number: "78", name: "Петров", position: "" },
      ],
      goals: [
        { player: "Соколов", time: "68'" },
        { player: "Железов", time: "83'" },
      ],
      stats: {
        shots: 10,
        shotsOnTarget: 5,
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-roboto">
      <div className="absolute top-4 right-4 bg-yellow-500/20 border border-yellow-500 text-yellow-300 px-4 py-2 rounded text-xs z-50">
        ⚠️ Все данные вымышлены
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-white/30 text-white">
            {matchData.league}
          </Badge>
          <p className="text-white/70 text-sm">
            {matchData.date} • {matchData.time}
          </p>
        </div>

        <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-white/10 backdrop-blur mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-3 items-center gap-8">
              <div className="text-center">
                <img 
                  src={matchData.team1.logo} 
                  alt={matchData.team1.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-white/20"
                />
                <h2 className="text-4xl font-druk font-black tracking-wider text-white">
                  {matchData.team1.name}
                </h2>
              </div>
              
              <div className="text-center">
                <div className="text-7xl font-druk font-black tracking-tight mb-2">
                  <span className="text-white">{matchData.team1.score}</span>
                  <span className="text-white/40 mx-4">:</span>
                  <span className="text-white">{matchData.team2.score}</span>
                </div>
                <Badge variant="secondary" className="text-sm bg-green-600 text-white hover:bg-green-600">
                  ФИНАЛ
                </Badge>
              </div>

              <div className="text-center">
                <img 
                  src={matchData.team2.logo} 
                  alt={matchData.team2.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-white/20"
                />
                <h2 className="text-4xl font-druk font-black tracking-wider text-white">
                  {matchData.team2.name}
                </h2>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-2xl font-druk font-black mb-6 text-white flex items-center gap-2">
                <Icon name="Users" size={24} />
                СТАРТОВЫЙ СОСТАВ • ТИТАН
              </h3>
              <div className="space-y-3">
                {matchData.team1.lineup.map((player, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                      {player.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{player.name}</span>
                        {player.isCaptain && (
                          <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-500">
                            К
                          </Badge>
                        )}
                      </div>
                      {player.position && (
                        <p className="text-xs text-white/60">{player.position}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-2xl font-druk font-black mb-6 text-white flex items-center gap-2">
                <Icon name="Users" size={24} />
                СТАРТОВЫЙ СОСТАВ • ЛЕГИОН
              </h3>
              <div className="space-y-3">
                {matchData.team2.lineup.map((player, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm">
                      {player.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{player.name}</span>
                        {player.isCaptain && (
                          <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-500">
                            К
                          </Badge>
                        )}
                        {player.redCard && (
                          <Badge variant="destructive" className="text-xs">
                            <Icon name="Square" size={12} className="fill-current" />
                          </Badge>
                        )}
                      </div>
                      {player.position && (
                        <p className="text-xs text-white/60">{player.position}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-2xl font-druk font-black mb-6 text-white flex items-center gap-2">
                <Icon name="Target" size={24} />
                ГОЛЫ • ТИТАН
              </h3>
              <div className="space-y-3">
                {matchData.team1.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded bg-green-600/20 border border-green-600/30">
                    <div className="flex items-center gap-3">
                      <Icon name="CircleDot" size={20} className="text-green-400" />
                      <span className="font-bold text-white">{goal.player}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{goal.time}</div>
                      {goal.type && (
                        <Badge variant="outline" className="text-xs mt-1 border-green-500 text-green-400">
                          {goal.type}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-2xl font-druk font-black mb-6 text-white flex items-center gap-2">
                <Icon name="Target" size={24} />
                ГОЛЫ • ЛЕГИОН
              </h3>
              <div className="space-y-3">
                {matchData.team2.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded bg-red-600/20 border border-red-600/30">
                    <div className="flex items-center gap-3">
                      <Icon name="CircleDot" size={20} className="text-red-400" />
                      <span className="font-bold text-white">{goal.player}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{goal.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded bg-red-600/20 border border-red-600/30">
                <div className="flex items-center gap-3">
                  <Icon name="Square" size={20} className="text-red-500 fill-current" />
                  <div>
                    <div className="font-bold text-white">Шаров</div>
                    <div className="text-sm text-white/70">Красная карточка • 65'</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-white/10 backdrop-blur">
          <CardContent className="p-8">
            <h3 className="text-3xl font-druk font-black mb-8 text-center text-white">
              СТАТИСТИКА МАТЧА
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-white">{matchData.team1.stats.shots}</span>
                  <span className="text-white/70 text-sm font-semibold">УДАРЫ</span>
                  <span className="text-2xl font-bold text-white">{matchData.team2.stats.shots}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-l-full transition-all"
                    style={{ width: `${(matchData.team1.stats.shots / (matchData.team1.stats.shots + matchData.team2.stats.shots)) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-white">{matchData.team1.stats.shotsOnTarget}</span>
                  <span className="text-white/70 text-sm font-semibold">УДАРЫ В СТВОР</span>
                  <span className="text-2xl font-bold text-white">{matchData.team2.stats.shotsOnTarget}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-green-500 h-full rounded-l-full transition-all"
                    style={{ width: `${(matchData.team1.stats.shotsOnTarget / (matchData.team1.stats.shotsOnTarget + matchData.team2.stats.shotsOnTarget)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            PLT Academy • Season 2024/2025
          </p>
          <p className="text-white/30 text-xs mt-2">
            Все имена, команды и события полностью вымышлены
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

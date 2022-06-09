import Artist from 'components/Artist';
import CardImage from '../../assets/images/cardimage.jpg';
import Heart from '../../assets/images/heart.svg';
import Star from '../../assets/images/star.svg';
import './styles.css';

const DetailsPage = () => {
	return (
		<div className="details-container">
			<p>Título do filme</p>
			<div className="details-items">
				<div className="details-item-image">
					<img src={CardImage} alt="" />
				</div>
				<div className="details-item-infos">
					<div className="item-infos-movie">
						<div className="scores">
							<div className="score-stars">
								<div className="score-star-image">
									<img src={Star} alt="" />
								</div>
								<p>9.0</p>
							</div>
							<div className="score-hearts">
								<div className="score-heart-image">
									<img src={Heart} alt="" />
								</div>
								<p>10300</p>
							</div>
						</div>
						<div className="descriptions">
							<p>Gêneros: Ação, Avendura, Ficção</p>
							<p>Produtoras: Marvel Studios, Pascal Pictures, Columbia Pictures</p>
							<p>
							Ciente de que o feiticeiro das trevas Gellert Grindelwald se move nas 
							sombras para assumir o controle do mundo bruxo, Alvo Dumbledore confia 
							no magizoologista Newt Scamander para liderar a sua equipe numa missão.
							</p>
						</div>
					</div>
					<div className="artists">
						<Artist />
						<Artist />
						<Artist />
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailsPage;
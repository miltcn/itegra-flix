import Artist from 'components/Artist';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetalheFilme } from 'interfaces/DetalheFilme';
import { MainArtist } from 'interfaces/MainArtist';
import { Genero } from 'interfaces/Genero';
import Heart from '../../assets/images/heart.svg';
import Star from '../../assets/images/star.svg';
import axios from 'axios';
import { BASE_URL, BASE_URL_IMAGE } from 'utils/request';
import { TailSpin } from 'react-loader-spinner';
import './styles.css';

type UrlParams = {
	filmeId: string;
};

const DetailsPage = () => {

	const { filmeId } = useParams<UrlParams>();
	const [detalheFilme, setDetalheFilme] = useState<DetalheFilme>();
	const [mainArtists, setMainArtists] = useState<MainArtist[]>();
	const [generos, setGeneros] = useState<Genero[]>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`${BASE_URL}/${filmeId}?api_key=6e0eaa7e7cb48216d74a48f5859118d0&language=pt-BR`
			)
			.then((response) => {
				setDetalheFilme(response.data);
				setGeneros(response.data.genres);
			});
		axios
			.get(
				`${BASE_URL}/${filmeId}/credits?api_key=6e0eaa7e7cb48216d74a48f5859118d0&language=pt-BR`
			)
			.then((response) => {
				setMainArtists(response.data.cast.slice(0, 3));
			})
			.finally(() => {
				setIsLoading(false);
			})
	}, [filmeId]);

	return (
		<div className="details-container">
			{
				isLoading ? (
					<div className="loading">
						<TailSpin color="#FB8200" height={80} width={80} />
					</div>
				) :
					(
						<>
							<p>{detalheFilme?.title}</p>
							<div className="details-items">
								<div className="details-item-image">
									<img src={`${BASE_URL_IMAGE}/${detalheFilme?.poster_path}`} alt="" />
								</div>
								<div className="details-item-infos">
									<div className="item-infos-movie">
										<div className="scores">
											<div className="score-stars">
												<div className="score-star-image">
													<img src={Star} alt="" />
												</div>
												<p>{detalheFilme?.vote_average}</p>
											</div>
											<div className="score-hearts">
												<div className="score-heart-image">
													<img src={Heart} alt="" />
												</div>
												<p>{detalheFilme?.vote_count}</p>
											</div>
										</div>
										<div className="descriptions">
											<p>
												{`Gêneros: ${generos?.map((genero) => genero.name).join(", ")}`}
											</p>
											<p>
												{`Produtoras: ${detalheFilme?.production_companies.map((produtora) => produtora.name).join(", ")}`}
											</p>
											<p>
												{
													detalheFilme &&
													(detalheFilme.overview.length <= 300 ?
														detalheFilme.overview :
														detalheFilme.overview.substring(0, 300).trim() + '...')
												}
											</p>
										</div>
									</div>
									<div className="artists">
										{
											mainArtists &&
											mainArtists.map((mainArtist) => (
												<Artist {...mainArtist} key={mainArtist.id} />
											))
										}
									</div>
								</div>
							</div>
						</>
					)
			}
		</div>
	);
}

export default DetailsPage;
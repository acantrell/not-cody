import { FC } from 'react';
import { isPropertySignature } from 'typescript';

type TileProps = {
    letter: string,
    status?: string
};

const GameTile: FC<TileProps> = ({letter, status}) => {
    return (
        <div className={`game-tile ${status}`}>
            {letter}
        </div>
    );
};

export default GameTile;